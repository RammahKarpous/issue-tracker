"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Import third-party components
import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

// Import styles
import "easymde/dist/easymde.min.css";

interface IssueForm {
    title: string;
    description: string;
}

const NewIssue = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueForm>()
    const [error, setError] = useState('');

    return (
        <form className='max-w-xl m-auto space-y-3 mt-5' onSubmit={handleSubmit(async (data) => {
            try {
                await axios.post('/api/issues', data);
                router.push('/issues');
            } catch (error) {
                setError('En error has occured. Please try again.');
            }
        })}>
            <h1 className='text-3xl font-bold pb-2 border-b border-gray-200'>New issue</h1>

            <TextField.Root>
                <TextField.Input placeholder="Issue title" {...register('title')} />
            </TextField.Root>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <SimpleMDE {...field} placeholder='Issue description' />
                )}
            />

            {error && (
                <Callout.Root color="red">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}

            <Button>Submit new issue</Button>
        </form>
    )
}

export default NewIssue