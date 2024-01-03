import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const PUT: NextRequestHandler = async ({ params }) => {
	const { intentId } = params as { intentId: string };

	try {
		await prisma.order.update({
			where: {
				intent_id: intentId
			},
			data: { status: 'Being prepared!' }
		});
		return new NextResponse(JSON.stringify({ message: 'Order has been updated' }), { status: 200 });
	} catch (err) {
		console.error(err);
		return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
	}
};

interface NextRequestHandler {
	(
		context: {
			params: { intentId: string };
		}
	): Promise<NextResponse>;
}
