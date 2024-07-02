import { ProductDetailsKeys } from 'models/enums/productDetailsKey';
import { Controller, useFormContext } from 'react-hook-form';

interface ControlledTextFieldProps {
	name: string;
	customClass?: string;
	isTextarea?: boolean;
	inputType: string;
}

const CustomTextField = ({ name, customClass, isTextarea, inputType }: ControlledTextFieldProps) => {
	const { formState: { errors } } = useFormContext();

	const errorMessage = errors[name]?.message as string;
	return (
		<Controller
			name={name}
			render={({ field }) => (
				<div className='flex flex-col w-full items-center justify-center'>
					<label className='relative w-full'>
						{isTextarea ? (
							<>
								<textarea
									id={name}
									required
									{...field}
									onChange={(e) => field.onChange(e.target.value)}
									className={`${customClass ? customClass : 'h-[35px]'
										} w-full mt-1 block overflow-auto text-black px-4 py-2 text-lg outline-none border-2 bg-black/10 border-black/60 rounded-xl hover:border-white peer`}
								/>
							</>
						) : (
							<>
								<input
									id={name}
									{...field}
									type={inputType}
									required
									onChange={(e) => inputType === 'number' ? field.onChange(parseFloat(e.target.value)) : field.onChange(e.target.value)}
									className={
										`${customClass
											?
											customClass : 'w-full'
										} h-[35px] mt-1 block overflow-auto text-black px-4 py-2 text-lg outline-none border-2 bg-black/10 border-black/60 rounded-lg hover:border-white peer`}
								/>
							</>
						)}
						<span className='absolute left-0 top-[6px] px-1 text-lg text-black duration-300 tracking-wide peer-focus:text-black pointer-events-none peer-focus:text-sm peer-focus:-translate-y-[26px] bg-white/0 rounded-xl ml-2 peer-valid:text-sm peer-valid:-translate-y-[26px]'>
							{name}
						</span>
						{name === ProductDetailsKeys.PRICE && <span className="absolute left-0 top-0 mt-2 ml-[105px]">$</span>}
					</label>
					<div className='flex flex-row justify-start items-start w-full'>
						{errorMessage && <p className='text-red-500 mt-1'>{errorMessage}</p>}
					</div>
				</div>
			)}
		/>

	);
};

export default CustomTextField;
