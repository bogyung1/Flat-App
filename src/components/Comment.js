import React from "react";
import styled from 'styled-components/native';
import {ProfileImage} from "./ProfileImage";
import {View} from "react-native";

const ProfileView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;
`;

const CommentView = styled.View`
    width: 100%;
    justify-content: center;
`;

const ProfileName = styled.Text`
    color: #ffffff;
    font-size: 14px;
    margin-left: 5px;
`;

const CommentText = styled.Text`
    color: #ffffff;
    font-size: 12px;
`;

export const Comment = ({ user, comment }) => {
    return (
        <View>
            <ProfileView>
                <ProfileImage size={'SMALL'} imgURL={{uri : 'data:image/jpeg;base64,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'}}/>
                <ProfileName>{user}</ProfileName>
            </ProfileView>
            <CommentView>
                <CommentText>{comment}</CommentText>
            </CommentView>
        </View>
    );
};

Comment.defaultProps = {
  user: '작성자',
  comment: '댓글'
}
