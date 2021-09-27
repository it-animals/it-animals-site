import Head from "next/head";
import { BackgroundEffect } from "../../ui/components/BackgroundEffect/BackgroundEffect";
import { Header } from "../../ui/components/Header/Header";
import React from "react";
import { Wrapper } from "../../ui/components/PageComponent/Wrapper/Wrapper";
import { TopLine, Section, Heading } from "../../ui/styles/_pageElements";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  getHistoryContent,
  getHistoryContentById,
  getHistoryMediaContentById,
  getHistoryPageData,
  historyContentData,
} from "../../lib/historyPage";
import { router } from "next/client";
import fs from "fs";
import path from "path";
import { getContentPath } from "../../lib/path";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import ReactHTMLParser from "react-html-parser";
const Content = styled.div`
  & ul {
    & li {
      list-style: disc;
      list-style-position: inside;
      margin-bottom: 5px;
    }
  }

  & b {
    font-weight: 700;
  }
`;
const images = [
  {
    original: "../../../../content/media/history/1/1472042719_15.jpg",
    thumbnail: "../../../../content/media/history/1/1472042719_15.jpg",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

const WrapperGallery = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 85px;
  padding-bottom: 60px;
`;
const IndividualHistoryPage: NextPage<{
  data: historyContentData & { media: string[] };
}> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundEffect forPreview={false} />
        <Header />
        <Wrapper>
          <Section>
            <TopLine>
              <Heading>{ReactHTMLParser(data.heading)}</Heading>
            </TopLine>
            <Content>{ReactHTMLParser(data.content)}</Content>
            <WrapperGallery>
              {data.media.length > 0 && (
                <ImageGallery
                  autoPlay={true}
                  lazyLoad={true}
                  items={data.media.map((item) => ({
                    original: item,
                    thumbnail: item,
                  }))}
                />
              )}
            </WrapperGallery>
          </Section>
        </Wrapper>
      </main>
    </>
  );
};

export async function getStaticPaths(context: any) {
  // Чекаем, существуют ли указаные пути на файлы, если нет, то 404
  const historyPostDirectory = path.join(getContentPath, "/history");
  const files = fs.readdirSync(historyPostDirectory);
  const paths = files.map((file) => ({
    params: { id: file.replace(".md", "") },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  //если путь на файл существует то грузим данные
  const id = params!.id;
  const data = getHistoryContentById(id);
  const media = getHistoryMediaContentById(id);
  return {
    props: {
      data: {
        ...data,
        media,
      },
    },
  };
};

export default IndividualHistoryPage;