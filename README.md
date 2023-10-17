# Get tag or commit id

![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)
![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)

`get-tag-or-commit-id` is a GitHub Action that gets the tag name if it exists otherwise returns the commit id.

## Usage

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Get tag or commit id
    id: get-version-id
    uses: iawia002/get-tag-or-commit-id@v1
    with:
      length: 7

  - name: Print Output
    id: output
    run: echo "${{ steps.get-version-id.outputs.id }}"
```

## Inputs

| Name   | Required | Default | Description                          |
| ------ | -------- | ------- | ------------------------------------ |
| length | `false`  | 7       | the expected length of the commit id |

## Outputs

| Name | Description                       |
| ---- | --------------------------------- |
| id   | the value of the tag or commit id |
| type | the type of value (tag/pr/commit) |
