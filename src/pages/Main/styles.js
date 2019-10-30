import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#888',
})`
    flex: 1;
    height: 40px;
    padding: 0 15px;
    border-width: 1px;
    background-color: #eee;
    border-radius: 4px;
    border: ${props => (props.wrongInput ? 'red' : '#eee')};
`;

export const SubmitButton = styled(RectButton)`
    background-color: #100496;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    border-radius: 4px;
    margin-left: 10px;
    opacity: ${props => (props.loading ? 0.6 : 1)};
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    flex: 1;
    margin: 10px 2px;
    align-self: stretch;
    border-radius: 5px;
    justify-content: center;
    background: #100496;
    align-items: center;
    flex-direction: row;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    margin-left: 5px
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const GroupButton = styled.View`
    flex-direction: row;
`;

export const RemoveUserButton = styled(RectButton)`
    flex: 1;
    margin: 10px 2px;
    max-width: 50px;
    border-radius: 5px;
    justify-content: center;
    background: red;
    align-items: center;
    flex-direction: row;
    height: 36px;
`;
