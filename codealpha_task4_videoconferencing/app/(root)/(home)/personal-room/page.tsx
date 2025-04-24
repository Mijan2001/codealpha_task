'use client';

import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';

import { useGetCallById } from '@/hooks/useGetCallById';
import { Button } from '@/components/ui/button';

import { toast } from 'sonner';

const Table = ({
    title,
    description
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-col items-start gap-2 xl:flex-row xl:items-center">
            <h1 className="text-sm font-medium text-gray-400 lg:text-lg xl:min-w-[150px]">
                {title}:
            </h1>
            <h1 className="truncate text-base font-semibold text-gray-100 max-sm:max-w-[320px] lg:text-lg">
                {description}
            </h1>
        </div>
    );
};

const PersonalRoom = () => {
    const router = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();

    const meetingId = user?.id;

    const { call } = useGetCallById(meetingId!);

    const startRoom = async () => {
        if (!client || !user) return;

        const newCall = client.call('default', meetingId!);

        if (!call) {
            await newCall.getOrCreate({
                data: {
                    starts_at: new Date().toISOString()
                }
            });
        }

        router.push(`/meeting/${meetingId}?personal=true`);
    };

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

    return (
        <section className="flex size-full flex-col gap-10 p-6 text-white bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold lg:text-4xl text-center">
                Personal Meeting Room
            </h1>
            <div className="flex w-full flex-col gap-8 xl:max-w-[900px] mx-auto">
                <Table
                    title="Topic"
                    description={`${user?.username}'s Meeting Room`}
                />
                <Table title="Meeting ID" description={meetingId!} />
                <Table title="Invite Link" description={meetingLink} />
            </div>
            <div className="flex justify-center gap-5">
                <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                    onClick={startRoom}
                >
                    Start Meeting
                </Button>
                <Button
                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                    onClick={() => {
                        navigator.clipboard.writeText(meetingLink);
                        toast('Link Copied');
                    }}
                >
                    Copy Invitation
                </Button>
            </div>
        </section>
    );
};

export default PersonalRoom;
