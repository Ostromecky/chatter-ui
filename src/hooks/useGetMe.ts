import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

const getMeDocument = graphql(`
    query Me {
        me {
            email
            _id
        }
    }
`)

const useGetMe = () => {
    return useQuery(getMeDocument);
}

export { useGetMe }
