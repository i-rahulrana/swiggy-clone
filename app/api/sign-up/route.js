import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "../../auth/User";
import connectToDB from "../../utils/mongoose";

export async function POST(request) {
  await connectToDB();
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    // let's check if the user already exists, if that's case we don't want to create a duplicate user
    const user = User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "Email already exists.",
        },
        { status: 400 }
      );
    }

    // hash the password, you don't want to save it as a plain text
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save the user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // save the new user
    const savedUser = await newUser.save();
    return NextResponse.json(
      { message: "User created successfully", success: true, savedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
