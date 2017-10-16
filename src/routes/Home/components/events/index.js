import React from 'react'
//import { GITHUB } from '../../../../constants'

export const IssueComment = (payload, repo) => (
  <p>
    <strong>Issue comment:</strong> [<a
      href={payload.comment.html_url}
      target="_blank"
    >
      #{payload.issue.number}
    </a>] {payload.comment.body}
  </p>
)

export const WatchEvent = () => <p>Started to watch</p>

export const PushEvent = (payload, repo) => (
  <p>
    <strong>New commits:</strong>{' '}
    {payload.commits.map(commit => commit.message)}
  </p>
)

export const PullRequest = (payload, repo) => (
  <p>
    <strong>Sent a PR:</strong> [<a
      href={payload.pull_request.html_url}
      target="_blank"
    >
      #{payload.pull_request.number}
    </a>] {payload.pull_request.title}
  </p>
)

export const Create = (payload, repo) => (
  <p>
    <strong>Just created:</strong> [{payload.ref}] {payload.description}
  </p>
)