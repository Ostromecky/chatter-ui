import { graphql } from '../gql';
import { useQuery } from '@apollo/client';

const getChatDocuments = graphql(`
    query Chats {
        chats {
            ...ChatFragment
        }
    }
`)

export const useGetChats = () => {
    return useQuery(getChatDocuments);
}
