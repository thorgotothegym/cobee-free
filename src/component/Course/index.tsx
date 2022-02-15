import React from "react";

import { Descriptions } from "antd";

import { ICourse } from "./type";

export const Course = ({
  name,
  surname,
  talkDescription,
  talkTitle,
  timeTalk,
}: ICourse) => {
  return (
    <>
      <Descriptions title={talkTitle}>
        <Descriptions.Item label="By">{`${name} ${surname}`}</Descriptions.Item>
        <Descriptions.Item label="Time">{timeTalk}</Descriptions.Item>
        <Descriptions.Item label="About this course">
          {talkDescription}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
