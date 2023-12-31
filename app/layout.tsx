// Import next components
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Import styles
import '@radix-ui/themes/styles.css'
import './theme-config.css'
import './globals.css'

// Import third party components
import { Theme } from '@radix-ui/themes'

// Import components
import Navigation from '@/components/Navigation'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<Theme>
					<Navigation />

					<main>
						{children}
					</main>
				</Theme>
			</body>
		</html>
	)
}
