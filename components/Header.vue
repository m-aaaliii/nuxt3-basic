<script>
	export default {
		name: 'FaSearch',
		
	}
</script>
<template>
	<div class="pt-[50px] pr-[0px] pb-[10px] pl-[0px]">
		<div class="container mx-auto pr-[15px] pl-[15px]">
			<div class="flex flex-wrap justify-between mobile-only:flex-col">
			<div class="flex justify-between">
				<div class="w-3/4">
					<div id="colorlib-logo" class="text-[34px] m-0 p-0 font-bold mobile-only:mb-[10px]">
					<NuxtLink to="/" class="relative text-gray-600 font-sans">Footwear</NuxtLink></div>
				</div>
				<Hamburger />
				</div>
				<div class=" w-1/4 mobile-only:w-[100%]">
					<form action="#" class="search-wrap">
						<div class="relative mb-[20px] block">
							<input type="search"
								class="h-[40px] pl-[1em] pr-[4.5em] font-light bg-white border border-solid border-gray-200 block w-full pt-[0.375rem] pb-[0.375rem] leading-6 text-gray-700 outline-none rounded-[30px]"
								placeholder="Search" />
							<button
								class="text-center h-[40px] w-[40px] absolute top-0 right-[-4px] p-0 bg-[#88c8bc] border border-solid border-[#88c8bc] cursor-pointer text-white mr-[4px] mb-[4px] text-[14px] font-normal rounded-full"
								type="submit">

								<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1664 1664"
									class="font-normal normal-case leading-none relative left-[12px]">
									<path fill="currentColor"
										d="M1152 704q0-185-131.5-316.5T704 256T387.5 387.5T256 704t131.5 316.5T704 1152t316.5-131.5T1152 704zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124q-143 0-273.5-55.5t-225-150t-150-225T0 704t55.5-273.5t150-225t225-150T704 0t273.5 55.5t225 150t150 225T1408 704q0 220-124 399l343 343q37 37 37 90z">
									</path>
								</svg>

							</button>
						</div>
					</form>

				</div>

			</div>
			<div class="flex flex-wrap mr-[-15px] ml-[-15px] mobile-only:hidden">
				<div class="w-[100%] block text-left">
					<ul class="p-0 mt-[20px] mr-[0px] mb-[0px] ml-[-12px]">
						<li
							class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider">
							<NuxtLink to="/" class="text-[#88c8bc] pt-[10px] pb-[10px] pl-[12px] pr-[12px] relative">Home</NuxtLink>
						</li>
						<dropdown />
						<li
							class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider">
							<NuxtLink to="/women" class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black">Women</NuxtLink>
						</li>
						<li
							class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider">
							<NuxtLink to="/about" class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black">About</NuxtLink>
						</li>
						<li
							class="p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider">
							<NuxtLink to="/contact" class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black">Contact</NuxtLink>
		                </li>
						<li
							class="cart float-right p-[0] m-[0] list-none inline font-normal font-rokkitt uppercase text-[15px] tracking-wider">
							<NuxtLink to="/cart" class="relative pt-[10px] pb-[10px] pl-[12px] pr-[12px] text-black flex">
								<i class="pr-[8px] ">
									<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
										viewBox="0 0 1024 1024">
										<path fill="#000"
											d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80z" />
										</svg>
								</i>
								Cart [0]
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div> 
		</div>

	</div>
</template>
