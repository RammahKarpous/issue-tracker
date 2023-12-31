import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import { issueSchema } from "@utils/validationSchema";

export async function POST( request: NextRequest ) {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if ( !validation.success ) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }

    const niewIssue = await prisma.issue.create({
        data: {
            title: body.title,
            desciption: body.description
        }
    })

    return NextResponse.json(niewIssue, { status: 201 })
}