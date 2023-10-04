'use server'

import { UTApi } from 'uploadthing/server'

const utapi = new UTApi()

export const deleteFile = async (fileId: string) => {
  await utapi.deleteFiles(fileId)
  return { success: true, message: 'File deleted' }
}

export const addFile = async (formData: FormData) => {
  const file = formData.get('file')
  const response = await utapi.uploadFiles([file])
  const image = response[0].data?.key
  return { success: true, message: 'File added', image }
}

export const addFileFromUrl = async (url: string) => {
  await utapi.uploadFilesFromUrl(url)
  return { success: true, message: 'File added' }
}
