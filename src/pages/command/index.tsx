import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Header } from "../../ui/components/Header/Header";
import { Wrapper } from "../../ui/components/PageComponent/Wrapper/Wrapper";
import { CommandList } from "../../ui/components/CommandList/CommandList";
import { SectionSeparator } from "../../ui/components/SectionSeparator/SectionSeparator";
import { BackgroundEffect } from "../../ui/components/BackgroundEffect/BackgroundEffect";
import { Stickers } from "../../ui/styles/pages/command.style";
import {
  Heading,
  Section,
  TextBlock,
  TopLine,
} from "../../ui/styles/_pageElements";
import { getMainPageInfo } from "../../lib/mainPage";
import {
  contentCommandPageInfo,
  getCommandPageInfo,
} from "../../lib/commanPage";
import reactHTMLParser from "react-html-parser";
import { contentCommandUserInfo, getCommandInfo } from "../../lib/commandData";

const Command: NextPage<{
  pageData: contentCommandPageInfo;
  commandData: contentCommandUserInfo[];
}> = ({ pageData, commandData }) => {
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
        <Section>
          <Wrapper>
            <TopLine>
              <div>
                <Heading
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: ["easeInOut"], duration: 0.7, delay: 0 }}
                >
                  {reactHTMLParser(pageData.heading)}
                </Heading>
                <TextBlock
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: ["easeInOut"],
                    duration: 0.7,
                    delay: 0.4,
                  }}
                >
                  {reactHTMLParser(pageData.description)}
                </TextBlock>
              </div>
              <Stickers />
            </TopLine>
            <SectionSeparator />
          </Wrapper>
        </Section>
        <CommandList data={commandData} />
        <SectionSeparator inverted={true} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  // Получение и прокидывание данных перед самой сборкой статики
  const pageData = getCommandPageInfo();
  const commandData = getCommandInfo();
  return {
    props: {
      pageData,
      commandData,
    },
  };
}

export default Command;
