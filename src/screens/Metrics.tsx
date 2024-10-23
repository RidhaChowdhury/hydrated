import HydrationHistoryCalendar from '@/components/HydrationHistoryCalendar';
import { useTheme } from '@/hooks/theme-provider';

export default function Log({ isActive }: { isActive: boolean }) {
   const { theme } = useTheme();

   return (
      <div
         className={`relative flex flex-col items-center justify-center min-h-screen overflow-hidden font-sans ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
      >
         <HydrationHistoryCalendar/>
      </div>
   );
}