import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req, res) {
    try {
        // Ensure environment variables are set
        const { RAZOR_PAY_ID, RAZOR_SECRET_KEY, SUBSCRIPTION_PLAN_ID } = process.env;
        if (!RAZOR_PAY_ID || !RAZOR_SECRET_KEY || !SUBSCRIPTION_PLAN_ID) {
            throw new Error("Missing environment variables");
        }

        // Initialize Razorpay instance
        const instance = new Razorpay({
            key_id: RAZOR_PAY_ID,
            key_secret: RAZOR_SECRET_KEY
        });

        // Create subscription
        const result = await instance.subscriptions.create({
            plan_id: SUBSCRIPTION_PLAN_ID,
            customer_notify: 1,
            quantity: 1,
            total_count: 1,
            addons: [],
            notes: {
                key1: 'Note'
            }
        });

        // Return response
        return NextResponse.json(result);
    } catch (error) {
        // Log error and return error response
        console.error("Error creating subscription:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

