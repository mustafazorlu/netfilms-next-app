"use client";

import React from "react";

const Error = () => {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <h1>We couldn&apos;t find the movie you looking for!</h1>
            <Link
                href="/"
                style={{
                    textDecoration: "underline",
                    fontSize: 20,
                    marginTop: 8,
                }}
            >
                Go home
            </Link>
        </div>
    );
};

export default Error;
