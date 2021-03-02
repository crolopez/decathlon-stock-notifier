import fs from 'fs'

const USERS_FILE = '.users'

function getRegisteredUsers(): string[] {
  if (!fs.existsSync(USERS_FILE)) {
    fs.closeSync(fs.openSync(USERS_FILE, 'w'))
  }

  const usersRaw: string = fs.readFileSync(USERS_FILE, 'utf8')
  return usersRaw.split('\n').filter(x => x != '')
}

function registerUser(userId: string): void {
  const registeredUsers = getRegisteredUsers()

  if (!registeredUsers.includes(userId)) {
    fs.appendFileSync(USERS_FILE, `\n${userId}`)
  }
}

export { registerUser, getRegisteredUsers }
