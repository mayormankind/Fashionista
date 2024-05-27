import React from 'react'

export default function ErrorPage() {
  return (
    <div>
      <div className="flex items-center text-center w-full flex-col gap-5 text-gray h-full justidy-center">
        <p>oops! page not found</p>
        <h2 className="text-4xl text-brown">404 page</h2>
        <p>Sorry, but the page you requested was not found!</p>
        <a href="/" className="text-brown hover:'color-brown border-b-brown'">Go back to home page</a>
      </div>
    </div>
  )
}
