import { useState } from 'react'
import ContextErrorHandler from '../shared/ContextErrorHandler/ContextErrorHandler'

interface IPostOwner {
    id: string
    title: string
    firstName: string
    lastName: string
    picture: string
}
export interface IBlogPost {
    id: string
    image: string
    likes: number
    owner: IPostOwner
    publishDate: string
    tags: Array<string>
    text: string
}

export const BlogPost = (props: IBlogPost) => {
    const { owner, text } = props
    return (
        <div
            style={{
                width: 200,
                margin: '10px auto',
                padding: '1rem',
                border: '2px solid #504dfd',
            }}
        >
            <ContextErrorHandler>
                <div>
                    <p> {owner.firstName} </p>
                    <p> {text} </p>
                </div>
            </ContextErrorHandler>
        </div>
    )
}
