import React from "react";
import { Container, CardContainer } from "./style";
import NormaInput from "./NormalInput/index";
import Card from "../Card/index";
import BgColorInput from './NormalBg/index';
import  PasswordDefault  from "../Inputs/Password-default/index";
import {PasswordDanger} from './password_danger/index'
import {PasswordSuccess} from './password_success/index'
import {PasswordDisabledAll} from './password_disabled_all/index'
import {PasswordBg} from './password_bg/index'
import { InputdUserDefault } from "./input_user_default/index";
import { InputNumber } from "./input_number_default/index";

 
export const Inputs = () => {
  return (
    <>
      <h1>Input</h1>
      <p style={{
        padding:'7px 0px 15px 0px',
      }}>To get user input</p>
      <h1 style={{
        padding:'0px 0px 10px 0px',
      }}>When to Use </h1>
      <p>A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.</p>
      <ul style={{
        listStyle:"circle",
        padding:' 20px 20px 50px 20px',
        
      }}><li>A user input in a form field is needed.</li></ul>
      
      {/* inputs */}
    <Container>
      <CardContainer>
      <Card type='Normal-Default'
        desc={`type='normal' button size='large, medium, small' placeholder='normal medium'`}
        >
       <NormaInput type={'default'} placeholder={'Normal-default-small'} size='small'/>
       <NormaInput type={'default'} placeholder={'Normal-default-medium'} size='medium'/>
       <NormaInput type={'default'} placeholder={'Normal-default-large'} size='large'/>
      </Card>
      <Card type='Success'
        desc={`type='normal' button size='large, medium, small' placeholder='normal medium'`}>
       <NormaInput type={'success'} placeholder={'Normal-success-small'} size='small'/>
       <NormaInput type={'success'} placeholder={'Normal-success-medium'} size='medium'/>
       <NormaInput type={'success'} placeholder={'Normal-success-large'} size='large'/>
      </Card>
      <Card type='Danger'
        desc={`type='normal' button size='large, medium, small' placeholder='normal medium'`}>
       <NormaInput type={'danger'} placeholder={'Normal-danger-small'} size='small'/>
       <NormaInput type={'danger'} placeholder={'Normal-danger-medium'} size='medium'/>
       <NormaInput type={'danger'} placeholder={'Normal-danger-large'} size='large'/>
      </Card>
      <Card type='Normal Disabled All Types'
        desc={`type='normal' button size='large, medium, small' placeholder='normal medium'`}>
       <NormaInput disabled="disabled" type={'default'} placeholder={'Normal-default-disabled'} size='large'/>
       <NormaInput disabled="disabled" type={'success'} placeholder={'Normal-success-disabled'} size='large'/>
       <NormaInput disabled="disabled" type={'danger'} placeholder={'Normal-danger-disabled'} size='large'/>
      </Card>
      <Card type='NormalBgColor'
        desc={`type='NormalBgColor' button size='large, medium, small' placeholder='normal medium'`}>
       <BgColorInput bgColor="default" type={'default'} placeholder={'Normal-default-disabled'} size='large'/>
       <BgColorInput bgColor="success" type={'success'} placeholder={'Normal-success-disabled'} size='large'/>
       <BgColorInput bgColor="danger" type={'danger'} placeholder={'Normal-danger-disabled'} size='large'/>
      </Card> 
      <Card type='PasswordDefault'
        desc={`type='Password Default' button size='large, medium, small' placeholder='normal medium'`}>
        <PasswordDefault inputType="default" placeholder="Password Default Small" type="password" size="small"/>
        <PasswordDefault inputType="default" placeholder="Password Default Medium" type="password" size="medium"/>
        <PasswordDefault inputType="default" placeholder="Password Default Large" type="password" size="large"/>
      </Card> 
      <Card type='PasswordDefault'
        desc={`type='Password Default' button size='large, medium, small' placeholder='normal medium'`}>
        <PasswordDanger inputType="danger" placeholder="Password Default Small" type="password" size="small"/>
        <PasswordDanger inputType="danger" placeholder="Password Default Medium" type="password" size="medium"/>
        <PasswordDanger inputType="danger" placeholder="Password Default Large" type="password" size="large"/>
      </Card> 
      <Card type='PasswordDefault'
        desc={`type='Password Default' button size='large, medium, small' placeholder='normal medium'`}>
        <PasswordSuccess inputType="success" placeholder="Password Default Small" type="password" size="small"/>
        <PasswordSuccess inputType="success" placeholder="Password Default Medium" type="password" size="medium"/>
        <PasswordSuccess inputType="success" placeholder="Password Default Large" type="password" size="large"/>
      </Card> 
      <Card type="Password Disabled All Types" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
         <PasswordDisabledAll disabled="disabled" inputType="default" placeholder="Password Default Disabled" type="password" size="large"/>
         <PasswordDisabledAll disabled="disabled" inputType="danger" placeholder="Password Danger Disabled" type="password" size="large"/>
         <PasswordDisabledAll disabled="disabled" inputType="success" placeholder="Password Success Disabled" type="password" size="large"/>
      </Card>
      <Card type="Password Bg Color" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
         <PasswordBg bgColor="default" inputType="default" placeholder="Password Default Disabled" type="password" size="large"/>
         <PasswordBg bgColor="danger" inputType="danger" placeholder="Password Danger Disabled" type="password" size="large"/>
         <PasswordBg bgColor="success" inputType="success" placeholder="Password Success Disabled" type="password" size="large"/>
      </Card>
      <Card type="Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
        <InputdUserDefault left inputType="default" placeholder="Left default small" size="small"/>
        <InputdUserDefault inputType="default" placeholder="Right default small" size="small"/>
        <InputdUserDefault left inputType="default" placeholder="Left default medium" size="medium"/>
        <InputdUserDefault inputType="default" placeholder="Right default medium" size="medium"/>
        <InputdUserDefault left inputType="default" placeholder="Left default large" size="large"/>
        <InputdUserDefault inputType="default" placeholder="Right default large" size="large"/>
          </Card>
    </CardContainer>
    <CardContainer>
    <Card type="Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Small" size="small"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Small" size="small"/>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Large" size="large"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Large" size="large"/>
          </Card>
          <Card type="Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Small" size="small"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Small" size="small"/>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Large" size="large"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Large" size="large"/>
          </Card>
          <Card type="BgColor" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault btnBg="default" left inputType="default" placeholder="Left Danger Small" size="large"/>
            <InputdUserDefault btnBg="default" inputType="default" placeholder="Right Danger Small" size="large"/>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Medium" size="large"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Medium" size="large"/>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Large" size="large"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Large" size="large"/>
          </Card>
          <Card type="Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber type="number" inputType="default" placeholder="Default Small" size="small"/>
            <InputNumber type="number" inputType="default" placeholder="Default Medium" size="medium"/>
            <InputNumber type="number" inputType="default" placeholder="Default Large" size="large"/>
          </Card>
          <Card type="Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber type="number" inputType="danger" placeholder="Danger Small" size="small"/>
            <InputNumber type="number" inputType="danger" placeholder="Danger Medium" size="medium"/>
            <InputNumber type="number" inputType="danger" placeholder="Danger Large" size="large"/>
          </Card>
          <Card type="Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber type="number" inputType="success" placeholder="Success Small" size="small"/>
            <InputNumber type="number" inputType="success" placeholder="Success Medium" size="medium"/>
            <InputNumber type="number" inputType="success" placeholder="Success Large" size="large"/>
          </Card>
          <Card type="Disabled All Types" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber disabled="disabled" type="number" inputType="default" placeholder="Number Default Disabled" size="large"/>
            <InputNumber disabled="disabled" type="number" inputType="danger" placeholder="Number Danger Disabled" size="large"/>
            <InputNumber disabled="disabled" type="number" inputType="success" placeholder="Number Success Disabled" size="large"/>
          </Card>
          <Card type="BgColor" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber bgColor="default" type="number" inputType="default" placeholder="Number Default" size="large"/>
            <InputNumber bgColor="danger" type="number" inputType="danger" placeholder="Number Danger" size="large"/>
            <InputNumber bgColor="success" type="number" inputType="success" placeholder="Number Success" size="large"/>
          </Card>
          <Card type="Float Number" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber floatNum type="number" inputType="default" placeholder="Number Default" size="large"/>
            <InputNumber floatNum type="number" inputType="danger" placeholder="Number Danger" size="large"/>
            <InputNumber floatNum type="number" inputType="success" placeholder="Number Success" size="large"/>
          </Card>
     
    </CardContainer>
      
    </Container>
          </>
  );
};

export default Inputs;
