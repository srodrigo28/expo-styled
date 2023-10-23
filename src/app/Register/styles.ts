import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #000;
    font-weight: bold;

`;

export const FormCadastro = styled.View`
    width: 80%;
    height: 50%;
    gap: 10px;
    margin: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;

    background-color: aliceblue;
`;

export const InputApp = styled.TextInput`
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    background-color: beige;

`

export const ButtonView = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
`

export const ButtonTouch = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 7px;
    border-radius: 7px;
    padding: 10px;
    background-color: blueviolet;

`
export const ButtonTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;

`;
