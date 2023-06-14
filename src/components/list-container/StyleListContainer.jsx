import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderItems = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

export const InfoItemHeader = styled.div`
  width: 20%;
  text-align: center;
`;

export const BoxList = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.61);
  background-color: #303030;
  color: #f1f1f1;
  @media (max-width: 465px) {
    width: 100%;
    padding: 20px;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f05228;
  padding: 25px 20px;
  gap: 20px;
  & input {
    width: 50%;
    border: none;
    padding: 10px 15px;
    color: #303030;
    font-size: 14px;
    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
    @media (max-width: 465px) {
      width: 60%;
      padding: 5px 10px;
    }

    @media (max-width: 375px) {
      font-size: 12px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }
`;

export const AddButton = styled.button`
  background-color: #303030;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 9px 15px;
  cursor: pointer;
  @media (max-width: 465px) {
    font-size: 14px;
    padding: 5px 10px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #303030;
  gap: 20px;
  @media (max-width: 465px) {
    font-size: 13px;
  }
  & ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #f05228;
    color: #fff;
    text-transform: capitalize;
    padding: 10px 20px;
    @media (max-width: 465px) {
      padding: 5px 10px;
    }
    @media (max-width: 375px) {
      padding: 5px 5px;
    }
  }
  & p {
    width: 100%;
    text-align: right;
    padding: 8px 15px;
    margin-top: 15px;
    color: #fff;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  gap: 10px;
`;

export const InfoList = styled.div`
  width: 100%;
  background-color: #303030;
`;

export const InfoItem = styled.div`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  @media (max-width: 465px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
  & input {
    width: 50px;
    border: none;
    padding: 2px 5px;
    font-size: 13px;
    text-align: center;
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
    @media (max-width: 465px) {
      width: 40px;
      font-size: 12px;
    }
    @media (max-width: 375px) {
      width: 35px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }
  & .delete {
    cursor: pointer;
    transition: 0.3s easy;
    &:hover {
      color: #303030;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 15px;
  color: #303030;
  font-size: 12px;
`;
