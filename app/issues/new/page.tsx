"use client"

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssue = () => {
    return (
        <div className='max-w-xl m-auto space-y-3'>
            <h1 className='text-3xl font-bold pb-2 border-b border-gray-200'>New issue</h1>

            <TextField.Root>
                <TextField.Input placeholder="Issue title" />
            </TextField.Root>

            <TextArea  placeholder='Issue description' />

            <Button>Submit new issue</Button>
        </div>
    )
}

export default NewIssue