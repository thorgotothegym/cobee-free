import React, { useState } from "react";

import { Input, Button, Form, DatePicker } from "antd";
import moment from "antd/node_modules/moment";

import { RegisterForm } from "./model";

const { Item } = Form;

const { TextArea } = Input;

export const Register = (): JSX.Element => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    surname: "",
    talkDescription: " ",
    talkTitle: "",
    timeTalk: "",
  });

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form", form);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            id="name"
            type="text"
            autoComplete="off"
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </Item>
        <Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input
            id="surname"
            type="text"
            autoComplete="off"
            onChange={(event) =>
              setForm({ ...form, surname: event.target.value })
            }
          />
        </Item>
        <Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            id="email"
            type="email"
            autoComplete="off"
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
        </Item>

        <Item
          label="Title Talk"
          name="talkTitle"
          rules={[{ required: true, message: "Please input your TalkTitle!" }]}
        >
          <Input
            id="TalkTitle"
            type="text"
            autoComplete="off"
            onChange={(event) =>
              setForm({ ...form, talkTitle: event.target.value })
            }
          />
        </Item>

        <Item
          label="Please tell us about the Talk"
          name="talkDescription"
          rules={[{ required: true, message: "Please input your Talk!" }]}
        >
          <TextArea
            showCount
            id="talkDescription"
            maxLength={255}
            onChange={(event) =>
              setForm({ ...form, talkDescription: event.target.value })
            }
          />
        </Item>
        <Item
          label="Select your time"
          name="talkTitle"
          rules={[{ required: true, message: "Please input your TalkTitle!" }]}
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            onChange={(value, dateString) => {
              console.log("value", value, "dateSTring", dateString);
              setForm({ ...form, timeTalk: dateString });
            }}
          />
        </Item>
        <Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </form>
    </>
  );
};
