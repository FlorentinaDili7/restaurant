import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async ({ params }: any): Promise<NextResponse> => {
	const { intentId } = params;

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
