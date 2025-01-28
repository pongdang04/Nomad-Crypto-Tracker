import styled from "styled-components";

declare module "styled-componets"{
  export interface DefaultTheme{
    textColor : string;
    bgColor : string;
    btnColor :string;
    accentColor:string;
  }
}