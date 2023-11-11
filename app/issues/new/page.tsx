"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Import third-party components
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';

// Import styles
import "easymde/dist/easymde.min.css";

// Import utilities
import { issueSchema } from '@/utils/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/components/ErrorMessage';

type IssueForm = z.infer<typeof issueSchema>

const NewIssue = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(issueSchema),
    })
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
            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <SimpleMDE {...field} placeholder='Issue description' />
                )}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            {error && (
                <Callout.Root color="red">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}

            <Button className='block'>Submit new issue</Button>
        </form>
    )
}

export default NewIssue