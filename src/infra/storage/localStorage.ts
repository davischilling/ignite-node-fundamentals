import fs from 'fs'
import { resolve } from 'path'

import { IStorageProvider } from '../../data/contracts'

export class LocalStorageProvider implements IStorageProvider {
  constructor(private readonly tmpFolder: string) {}

  async save(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(this.tmpFolder, file),
      resolve(`${this.tmpFolder}/${folder}`, file)
    )
    return file
  }
  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${this.tmpFolder}/${folder}`, file)
    try {
      await fs.promises.stat(filename)
    } catch {
      return
    }
    await fs.promises.unlink(filename)
  }
}
