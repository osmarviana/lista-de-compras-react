import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  Container,
  BoxList,
  InputsWrapper,
  AddButton,
  ResultContainer,
  InfoList,
  InfoItem,
  Item,
  HeaderItems,
  InfoItemHeader,
  Footer,
} from "./StyleListContainer";

export const ListContainer = () => {
  const [itens, setItens] = useState([]);
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const addItem = () => {
    const input = document.getElementById("input");
    const itemValue = input.value.trim();

    if (!itemValue) {
      alert("Você precisa informar um item para ser adicionado à lista.");
      return;
    }

    if (itens.some((item) => item.value === itemValue)) {
      alert("Você já adicionou este item à sua lista.");
      return;
    }

    const newItem = { value: itemValue, quantity: 0, price: 0 };
    setItens([...itens, newItem]);

    setShowList(true);

    setInputValue("");

    input.value = "";
  };

  const updatePrice = (index, newPrice) => {
    const updatedItens = [...itens];
    updatedItens[index].price = parseFloat(newPrice);
    setItens(updatedItens);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedItens = [...itens];
    updatedItens[index].quantity = parseInt(newQuantity);
    setItens(updatedItens);
  };

  const deleteItem = (index) => {
    const updatedItens = [...itens];
    updatedItens.splice(index, 1);
    setItens(updatedItens);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of itens) {
      total += item.quantity * item.price;
    }
    return total.toFixed(2);
  };

  // const clearValue = (index, event) => {
  //   event.target.value = "";
  //   const updatedItens = [...itens];
  //   updatedItens[index].quantity = 0;
  //   updatedItens[index].price = 0;
  //   setItens(updatedItens);
  // };

  return (
    <Container>
      <BoxList>
        <InputsWrapper>
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Adicione um item à lista"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <AddButton onClick={addItem}>Adicionar</AddButton>
        </InputsWrapper>
        {itens.length > 0 && (
          <ResultContainer>
            <ul>
              <InfoList>
                <HeaderItems>
                  <InfoItemHeader>
                    <span>Item</span>
                  </InfoItemHeader>
                  <InfoItemHeader>
                    <span>Valor</span>
                  </InfoItemHeader>
                  <InfoItemHeader>
                    <span>Qtd</span>
                  </InfoItemHeader>
                  <InfoItemHeader>
                    <span>Total</span>
                  </InfoItemHeader>
                  <InfoItemHeader>
                    <span>Deletar</span>
                  </InfoItemHeader>
                </HeaderItems>
              </InfoList>
              {itens.map((item, index) => (
                <Item key={index}>
                  <InfoItem>
                    <li>{item.value}</li>
                  </InfoItem>
                  <InfoItem>
                    <span>
                      <input
                        type="number"
                        name="value"
                        placeholder="0,00"
                        value={item.price === 0 ? "" : item.price}
                        onChange={(e) => updatePrice(index, e.target.value)}
                      />
                    </span>
                  </InfoItem>
                  <InfoItem>
                    <span>
                      <input
                        type="number"
                        name="qtd"
                        placeholder="0"
                        value={item.quantity === 0 ? "" : item.quantity}
                        onChange={(e) => updateQuantity(index, e.target.value)}
                      />
                    </span>
                  </InfoItem>
                  <InfoItem>
                    <span>R$ {(item.quantity * item.price).toFixed(2)}</span>
                  </InfoItem>
                  <InfoItem>
                    <span className="delete" onClick={() => deleteItem(index)}>
                      <RiDeleteBin5Fill />
                    </span>
                  </InfoItem>
                </Item>
              ))}
            </ul>
            <p>Valor Total das Compras: R$ {calculateTotal()}</p>
          </ResultContainer>
        )}
      </BoxList>
      <Footer>
        <p>&copy; 2023 Osmar Viana</p>
      </Footer>
    </Container>
  );
};
