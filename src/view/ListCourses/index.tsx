import React, { useState, useEffect } from "react";

import { Course } from "../../component/Course";
import { ICourse } from "../../component/Course/type";

import { MOCK } from "../../data/mock";

export const ListCourses = (): JSX.Element => {
  const [list, setList] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const getCourses = async (): Promise<void> => {
    try {
      setLoading(true);
      setTimeout(() => {
        setList([...list, ...MOCK]);
      }, 3000);
      setLoading(false);
    } catch (error) {
      setError("ups something is wrong my friend");
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <>
      {loading ? (
        "loading ..."
      ) : (
        <>
          {list.map((item: ICourse, key: number) => {
            return (
              <>
                <Course
                  name={item.name}
                  surname={item.surname}
                  talkDescription={item.talkDescription}
                  talkTitle={item.talkTitle}
                  timeTalk={item.talkTitle}
                  key={key.toString()}
                />
              </>
            );
          })}
        </>
      )}
    </>
  );
};
