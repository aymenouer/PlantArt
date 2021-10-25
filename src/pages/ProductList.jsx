import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";

import { mobile } from "../responsive";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export const ProductList = () => {
    return (
        <Container>
      <Navbar />
     
      <Title>PLANTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtre :</FilterText>
          <Select>
            <Option disabled selected>
            Couleur
            </Option>
            <Option>Rouge</Option>
            <Option>Blue</Option>
            <Option>Jaune</Option>
            <Option>Verte</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Plot Taille
            </Option>
            <Option>7L</Option>
            <Option>33L</Option>
        
          </Select>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Arbre</Option>
            <Option>Fleure</Option>
        
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier les plantes :</FilterText>
          <Select>
            <Option selected>Le plus récent</Option>
            <Option>Prix (asc)</Option>
            <Option>Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
    )
}
