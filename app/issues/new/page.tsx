"use client"

// Import third-party components
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

// Import styles
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string;
    description: string;
}

const NewIssue = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueForm>()

    return (
        <form className='max-w-xl m-auto space-y-3' onSubmit={handleSubmit(async (data) => {
            await axios.post('/api/issues', data);
            router.push('/issues');
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

            <Button>Submit new issue</Button>
        </form>
    )
}

export default NewIssue