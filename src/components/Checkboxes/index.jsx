import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { CheckBoxGeneric } from "./Checkbox";
// import { MiniCheckboxProject } from "./Mini_project";
import {
  BasicWrapper,
  CheckboxList,
  CheckboxText,
  CheckboxTitle,
} from "./style";

export const Checkbox = () => {
  return (
    <>
      <CheckboxTitle>Checkbox</CheckboxTitle>
      <CheckboxText>Checkbox component.</CheckboxText>
      <CheckboxTitle>When To Use</CheckboxTitle>
      <CheckboxList>
        <li>Used for selecting multiple values from several options.</li>
        <li>
          If you use only one checkbox, it is the same as using Switch to toggle
          between two states. The difference is that Switch will trigger the
          state change directly, but Checkbox just marks the state as changed
          and this needs to be submitted.
        </li>
      </CheckboxList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card
            type="Basic"
            desc={"default props with differnt size and lableText"}
          >
            <CheckBoxGeneric text="Large" size="large" />
            <CheckBoxGeneric checked text="Medium" size="medium" />
            <CheckBoxGeneric text="small" size="small" />
          </Card>
          {/* <Card
            type="With Color"
            desc={"default props with differnt size and lableText"}
          >
            <BasicWrapper>
              <CheckBoxGeneric checkColor="red" text="Large" size="large" />
              <CheckBoxGeneric checkColor="red" text="Medium" size="medium" />
              <CheckBoxGeneric checked checkColor="red" text="small" size="small" />
            </BasicWrapper>
            <BasicWrapper>
              <CheckBoxGeneric checkColor="green" text="Large" size="large" />
              <CheckBoxGeneric checked checkColor="green" text="Medium" size="medium" />
              <CheckBoxGeneric checkColor="green" text="small" size="small" />
            </BasicWrapper>
            <BasicWrapper>
              <CheckBoxGeneric checked checkColor="purple" text="Large" size="large" />
              <CheckBoxGeneric
                checkColor="purple"
                text="Medium"
                size="medium"
              />
              <CheckBoxGeneric checkColor="purple" text="small" size="small" />
            </BasicWrapper>
          </Card> */}
        </LayoutContainer>
        <LayoutContainer>
        <Card
            type="With Color"
            desc={"default props with differnt size and lableText"}
          >
            <BasicWrapper>
              <CheckBoxGeneric checked checkColor="rgb(104, 249, 104)" text="Large" size="large" />
              <CheckBoxGeneric checkColor="rgb(104, 249, 104)" text="Medium" size="medium" />
              <CheckBoxGeneric  checkColor="rgb(104, 249, 104)" text="small" size="small" />
            </BasicWrapper>
            <BasicWrapper>
              <CheckBoxGeneric checkColor="aqua" text="Large" size="large" />
              <CheckBoxGeneric checked checkColor="aqua" text="Medium" size="medium" />
              <CheckBoxGeneric checkColor="aqua" text="small" size="small" />
            </BasicWrapper>
            <BasicWrapper>
              <CheckBoxGeneric  checkColor="pink" text="Large" size="large" />
              <CheckBoxGeneric
                checkColor="pink"
                text="Medium"
                size="medium"
              />
              <CheckBoxGeneric checked checkColor="pink" text="small" size="small" />
            </BasicWrapper>
          </Card>
        </LayoutContainer>
        {/* <LayoutContainer>
          <Card
            type="Mini Project"
            desc={"Made with css :checked style. No using JS!"}
          >
            <MiniCheckboxProject />
          </Card>
          <Card
            type="Mini Project"
            desc={"Made with css :checked style. No using JS!"}
          >
            <CheckBoxGeneric checked size="small" checkColor="red" text="apple"/>
            <CheckBoxGeneric checked size="small" checkColor="purple" text="plum"/>
            <CheckBoxGeneric checked size="small" checkColor="orange" text="apelsin"/>
            <CheckBoxGeneric checked size="small" checkColor="blue" text="cucumber"/>
            <CheckBoxGeneric checked size="small" checkColor="limegreen" text="grapes"/>
            <CheckBoxGeneric checked size="small" checkColor="yellow" text="banana"/>
            <CheckBoxGeneric checked size="small" checkColor="yellowgreen" text="pear"/>
            <CheckBoxGeneric checked size="small" checkColor="crimson" text="cherry"/>
          </Card>
        </LayoutContainer> */}
      </LayoutWrapper>
    </>
  );
};
