import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  MainIcon,
  IconText,
  TextArea,
  MainMessage,
  SubMessage,
} from './TopSection.element'

function TopSectoion() {
  return (
    <SectionWrapper>
      <TopContainer>
        <MainIcon>
          <IconText />
        </MainIcon>
        <TextArea>
          <SubMessage>
            <p>
              大阪大学で工学修士を取得後、自動車会社で研究開発に従事。
              現在は会社に勤めながらWebアプリ開発を勉強中。
            </p>
          </SubMessage>
          <MainMessage>
            <p>
              夢は自分でサービスやプロダクトを制作して起業することです。
            </p>
          </MainMessage>
        </TextArea>
      </TopContainer>
    </SectionWrapper>
  )
}

export default TopSectoion