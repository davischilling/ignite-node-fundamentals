import { S3 } from 'aws-sdk'
import fs from 'fs'
import mime from 'mime'
import { resolve } from 'path'

import { IStorageProvider } from '../../data/contracts'
import { uploadConfig } from '../../main/config/upload'

export class AWSStorageProvider implements IStorageProvider {
  private client: S3

  constructor() {
    this.client = new S3({
      region: process.env.AWS_BUCKET_REGION,
    })
  }

  async save(file: string, folder: string): Promise<string> {
    const ogirinalName = resolve(uploadConfig.tmpFolder, file)
    const fileContent = await fs.promises.readFile(ogirinalName)
    const ContentType = mime.getType(ogirinalName)
    await this.client
      .putObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      })
      .promise()
    await fs.promises.unlink(ogirinalName)
    return file
  }
  async delete(file: string, folder: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: file,
      })
      .promise()
  }
}
