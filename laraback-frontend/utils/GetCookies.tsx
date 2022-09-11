import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { req, res } = ctx

  	const {cookies} = req
	
	return { props: {  } }
}