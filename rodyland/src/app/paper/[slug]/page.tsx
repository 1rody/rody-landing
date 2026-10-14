
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link'

export const metadata = {
  title: " :3",  
};


export default async function PaperPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src/content/papers', `${slug}.md`);

    if (!fs.existsSync(filePath)) notFound();

    const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'));

    return (
        <article className="prose w-full items-center justify-center flex mx-auto p-8">
            <div className='flex lg:w-1/2 w-full flex-col items-center text-left flex font-departure justify-center'>
                <Link className='text-xl p-10' href="/papers">Back</Link>
                <h1 className='text-2xl p-5'>{data.title}</h1>
                <ReactMarkdown  remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </article>
    );
}