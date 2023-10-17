import * as core from '@actions/core'
import { context } from '@actions/github'
import { PullRequest } from '@octokit/webhooks-types'

export async function run(): Promise<void> {
  try {
    const ref = context.ref
    const tagPath = 'refs/tags/'
    const prPath = 'refs/pull/'
    let id: string
    let type: string
    const length = Number(core.getInput('length'))

    if (ref.startsWith(tagPath)) {
      type = 'tag'
      id = ref.substring(tagPath.length, ref.length)
    } else if (ref.startsWith(prPath)) {
      type = 'pr'
      const payload = context.payload.pull_request as PullRequest
      id = payload.head.sha.substring(0, length)
    } else {
      type = 'commit'
      id = context.sha.substring(0, length)
    }

    core.setOutput('type', type)
    core.setOutput('id', id)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
