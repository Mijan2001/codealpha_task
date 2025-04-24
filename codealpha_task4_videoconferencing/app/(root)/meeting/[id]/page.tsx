'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '@/components/Alert';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';

const MeetingPage = () => {
    const { id } = useParams();
    const { isLoaded, user } = useUser();
    const { call, isCallLoading } = useGetCallById(id || '');
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    if (!isLoaded || isCallLoading)
        return (
            <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <Loader className="text-white animate-spin w-10 h-10" />
            </div>
        );

    if (!call)
        return (
            <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="rounded-2xl backdrop-blur-sm bg-white/10 p-10 shadow-2xl text-center">
                    <p className="text-3xl font-bold text-red-500">
                        Call Not Found
                    </p>
                </div>
            </div>
        );

    const notAllowed =
        call.type === 'invited' &&
        (!user || !call.state.members.find(m => m.user.id === user.id));

    if (notAllowed)
        return (
            <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="rounded-2xl backdrop-blur-sm bg-white/10 p-10 shadow-2xl w-full max-w-lg">
                    <Alert title="⚠️ You are not allowed to join this meeting" />
                </div>
            </div>
        );

    return (
        // video display area=================
        <main className="flex px-2 w-full items-center justify-center bg-gradient-to-br from-gray-800 via-gray-800 to-gray-800">
            <StreamCall call={call}>
                <StreamTheme>
                    {/* actual video area================= */}
                    <div className="w-full max-w-7xl h-full rounded-xl bg-gray-600 flex justify-center items-center min-h-[400px]">
                        {!isSetupComplete ? (
                            <MeetingSetup
                                setIsSetupComplete={setIsSetupComplete}
                            />
                        ) : (
                            <MeetingRoom />
                        )}
                    </div>
                </StreamTheme>
            </StreamCall>
        </main>
    );
};

export default MeetingPage;
