// 'use client';
// import { useState } from 'react';
// import {
//     CallControls,
//     CallParticipantsList,
//     CallStatsButton,
//     CallingState,
//     PaginatedGridLayout,
//     SpeakerLayout,
//     useCallStateHooks
// } from '@stream-io/video-react-sdk';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { Users, LayoutList } from 'lucide-react';

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger
// } from './ui/dropdown-menu';
// import Loader from './Loader';
// import EndCallButton from './EndCallButton';
// import { cn } from '@/lib/utils';

// type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

// const MeetingRoom = () => {
//     const searchParams = useSearchParams();
//     const isPersonalRoom = !!searchParams.get('personal');
//     const router = useRouter();
//     const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
//     const [showParticipants, setShowParticipants] = useState(false);
//     const { useCallCallingState } = useCallStateHooks();

//     // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
//     const callingState = useCallCallingState();

//     if (callingState !== CallingState.JOINED) return <Loader />;

//     const CallLayout = () => {
//         switch (layout) {
//             case 'grid':
//                 return <PaginatedGridLayout />;
//             case 'speaker-right':
//                 return <SpeakerLayout participantsBarPosition="left" />;
//             default:
//                 return <SpeakerLayout participantsBarPosition="right" />;
//         }
//     };

//     return (
//         <section className="relative border-3 border-amber-200 h-screen w-full overflow-hidden pt-4 text-white">
//             <div className="relative border-3 border-amber-200  flex size-full items-center justify-center">
//                 <div className=" flex  size-full max-w-[2000px] items-center">
//                     <CallLayout />
//                 </div>
//                 <div
//                     className={cn('h-[calc(100vh-86px)] hidden ml-2', {
//                         'show-block': showParticipants
//                     })}
//                 >
//                     <CallParticipantsList
//                         onClose={() => setShowParticipants(false)}
//                     />
//                 </div>
//             </div>
//             {/* video layout and call controls */}
//             <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
//                 <CallControls onLeave={() => router.push(`/`)} />

//                 <DropdownMenu>
//                     <div className="flex items-center">
//                         <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
//                             <LayoutList size={20} className="text-white" />
//                         </DropdownMenuTrigger>
//                     </div>
//                     <DropdownMenuContent className="border-gray-500 bg-gray-600 text-white">
//                         {['Grid', 'Speaker-Left', 'Speaker-Right'].map(
//                             (item, index) => (
//                                 <div key={index}>
//                                     <DropdownMenuItem
//                                         onClick={() =>
//                                             setLayout(
//                                                 item.toLowerCase() as CallLayoutType
//                                             )
//                                         }
//                                     >
//                                         {item}
//                                     </DropdownMenuItem>
//                                     <DropdownMenuSeparator className="border-dark-1 " />
//                                 </div>
//                             )
//                         )}
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//                 <CallStatsButton />
//                 <button onClick={() => setShowParticipants(prev => !prev)}>
//                     <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
//                         <Users size={20} className="text-white" />
//                     </div>
//                 </button>
//                 {!isPersonalRoom && <EndCallButton />}
//             </div>
//         </section>
//     );
// };

// export default MeetingRoom;

'use client';
import { useState } from 'react';
import {
    CallControls,
    CallParticipantsList,
    CallStatsButton,
    CallingState,
    PaginatedGridLayout,
    SpeakerLayout,
    useCallStateHooks
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from './ui/dropdown-menu';
import Loader from './Loader';
import EndCallButton from './EndCallButton';
import { cn } from '@/lib/utils';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('personal');
    const router = useRouter();
    const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
    const [showParticipants, setShowParticipants] = useState(false);
    const { useCallCallingState } = useCallStateHooks();

    const callingState = useCallCallingState();

    if (callingState !== CallingState.JOINED) return <Loader />;

    const CallLayout = () => {
        switch (layout) {
            case 'grid':
                return <PaginatedGridLayout />;
            case 'speaker-right':
                return <SpeakerLayout participantsBarPosition="left" />;
            default:
                return <SpeakerLayout participantsBarPosition="right" />;
        }
    };

    return (
        <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-none flex items-center justify-center">
                    <CallLayout />
                </div>

                {/* Participants list */}
                <div
                    className={cn(
                        'h-full w-[280px] bg-gray-900 p-4 overflow-y-auto',
                        {
                            block: showParticipants,
                            hidden: !showParticipants
                        }
                    )}
                >
                    <CallParticipantsList
                        onClose={() => setShowParticipants(false)}
                    />
                </div>
            </div>

            {/* Bottom icons Controls================== */}
            <div className="fixed bottom-4 w-full px-6 flex justify-start items-center gap-4 z-10">
                <CallControls onLeave={() => router.push(`/`)} />

                <div className="flex items-center gap-4">
                    {/* Layout Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                            <LayoutList size={16} className="text-white" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-600 text-white border-gray-500">
                            {['Grid', 'Speaker-Left', 'Speaker-Right'].map(
                                (item, index) => (
                                    <div key={index}>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                setLayout(
                                                    item.toLowerCase() as CallLayoutType
                                                )
                                            }
                                        >
                                            {item}
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="border-gray-100" />
                                    </div>
                                )
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Call Stats and Participants Button */}
                    <div className="flex items-center gap-4">
                        <CallStatsButton />
                        <button
                            onClick={() => setShowParticipants(prev => !prev)}
                            className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]"
                        >
                            <Users size={20} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* End Call Button */}
                {!isPersonalRoom && <EndCallButton />}
            </div>
        </section>
    );
};

export default MeetingRoom;
