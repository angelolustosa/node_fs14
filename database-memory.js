import { randomUUID } from 'crypto'

export class DatabaseMemory {

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    #produtos = new Map()

    listAll() {
        return Array.from(this.#produtos)// todos os vídeos sem o id
    }
    
    list() {
        return this.#produtos.values() // todos os vídeos sem o id
    }

    create(video) {
        //this.#produtos.push(video)
        const videoId = randomUUID()

        this.#produtos.set(videoId, video)
    }

    update(id, video) {
        //this.#produtos.push(video)
        this.#produtos.set(id, video)

    }

    delete(id) {
        this.#produtos.delete(id)

    }
}