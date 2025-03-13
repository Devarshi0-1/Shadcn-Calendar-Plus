import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from './button';
import { cn } from './../../lib/utils';

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('p-3', className)}
			classNames={{
				months: 'flex flex-col sm:flex-row gap-2 relative',
				month: 'flex flex-col gap-4',
				month_caption: 'flex justify-center pt-1 relative items-center w-full',
				caption_label: 'hidden text-sm font-medium',
				nav: 'absolute pointer-events-none flex justify-between top-1 z-10 w-full items-center gap-1',
				button_previous: cn(
					buttonVariants({ variant: 'outline' }),
					'size-7 bg-transparent p-0 opacity-50 pointer-events-auto    hover:opacity-100'
				),
				button_next: cn(
					buttonVariants({ variant: 'outline' }),
					'size-7 absolute right-1 bg-transparent p-0 opacity-50 pointer-events-auto   hover:opacity-100'
				),
				month_grid: 'w-full border-collapse space-x-1',
				weekdays: 'flex',
				weekday:
					'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
				week: 'flex w-full mt-2',
				day: cn(
					'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
					props.mode === 'range'
						? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
						: '[&:has([aria-selected])]:rounded-md'
				),
				day_button: cn(
					buttonVariants({ variant: 'ghost' }),
					'size-8 p-0 font-normal aria-selected:opacity-100'
				),
				range_start:
					'day-range-start aria-selected:bg-primary rounded aria-selected:text-primary-foreground',
				range_end:
					'day-range-end aria-selected:bg-primary rounded aria-selected:text-primary-foreground',
				selected:
					'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
				today: 'bg-accent text-accent-foreground',
				outside:
					'day-outside text-muted-foreground aria-selected:text-muted-foreground',
				disabled: 'text-muted-foreground opacity-50',
				range_middle:
					'aria-selected:bg-accent aria-selected:text-accent-foreground',
				hidden: 'invisible',
				...classNames,
			}}
			components={{
				Chevron: (props) => {
					if (props.orientation === 'left') {
						return (
							<ChevronLeftIcon
								className={cn('size-4', className)}
								{...props}
							/>
						);
					}
					return (
						<ChevronRightIcon
							className={cn('size-4', className)}
							{...props}
						/>
					);
				},
			}}
			captionLayout='dropdown'
			startMonth={new Date(2010, 11)}
			{...props}
		/>
	);
}

export { Calendar };
