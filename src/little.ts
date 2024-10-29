import { Buffer } from "node:buffer";

/**
 * Little Endian reader for Uint8Array (node:buffer)
 *
 * ```ts
 * const reader = new BinReader(buffer); // from node:buffer
 * ```
 */
export class BinReader {
        /** Current position in the buffer */
        accessor position: number = 0;
        constructor(public buffer: Buffer) {}

        /**
         * Reads an unsigned 8-bit integer and advances the position
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readUInt8();
         * ```
         */
        public readUInt8(): number {
                const value = this.buffer.readUInt8(this.position);
                this.position += 1;
                return value;
        }

        /**
         * Reads an unsigned 16-bit integer and advances the position
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readUInt16();
         * ```
         */
        public readUInt16(): number {
                const value = this.buffer.readUInt16LE(this.position);
                this.position += 2;
                return value;
        }

        /**
         * Reads an unsigned 32-bit integer and advances the position
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readUInt32();
         * ```
         */
        public readUInt32(): number {
                const value = this.buffer.readUInt32LE(this.position);
                this.position += 4;
                return value;
        }

        /**
         * Reads a signed 8-bit integer and advances the position
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readInt8();
         * ```
         */
        public readInt8(): number {
                const value = this.buffer.readInt8(this.position);
                this.position += 1;
                return value;
        }

        /**
         * Reads a signed 16-bit integer and advances the position
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readInt16();
         * ```
         */
        public readInt16(): number {
                const value = this.buffer.readInt16LE(this.position);
                this.position += 2;
                return value;
        }

        /**
         * Reads a signed 32-bit integer and advances the position.
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readInt32();
         * ```
         */
        public readInt32(): number {
                const value = this.buffer.readInt32LE(this.position);
                this.position += 4;
                return value;
        }

        /**
         * Reads a 32-bit float and advances the position.
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readFloat32();
         * ```
         */
        public readFloat32(): number {
                const value = this.buffer.readFloatLE(this.position);
                this.position += 4;
                return value;
        }

        /**
         * Reads a 64-bit double and advances the position.
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readFloat64();
         * ```
         */
        public readDouble(): number {
                const value = this.buffer.readDoubleLE(this.position);
                this.position += 8;
                return value;
        }

        /**
         * Reads a buffer of bytes, of length `length`, and advances the position.
         *
         * ```ts
         * const reader = new BinReader(buffer); // from node:buffer
         * const value = reader.readBytes(4);
         * ```
         *
         * @param length The number of bytes to read.
         */
        public readBytes(length: number): Buffer {
                const value = this.buffer.subarray(
                        this.position,
                        this.position + length
                );
                this.position += length;
                return value;
        }
}

/**
 * Little Endian writer for Uint8Array (node:buffer)
 *
 * ```ts
 * const writer = new BinWriter();
 * ```
 */
export class BinWriter {
        /** The underlying buffer. */
        accessor buffer: Buffer = Buffer.alloc(0);

        /**
         * Writes an unsigned 8-bit integer to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeUInt8(0xFF);
         *
         * console.log(writer.buffer);
         * // prints <Buffer ff>
         * ```
         *
         * @param value The value to write.
         */
        public writeUInt8(value: number): void {
                const chunk = Buffer.alloc(1);
                chunk.writeUInt8(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes an unsigned 16-bit integer to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeUInt16(0xdead);
         * writer.writeUInt16(0xbeef);
         *
         * console.log(writer.buffer);
         * // prints <Buffer ad de ef be>
         * ```
         *
         * @param value The value to write.
         */
        public writeUInt16(value: number): void {
                const chunk = Buffer.alloc(2);
                chunk.writeUInt16LE(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes an unsigned 32-bit integer to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeUInt32(0xfeedface);
         *
         * console.log(writer.buffer);
         * // prints <Buffer ce fa ed fe>
         * ```
         *
         * @param value The value to write.
         */
        public writeUInt32(value: number): void {
                const chunk = Buffer.alloc(4);
                chunk.writeUInt32LE(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes a signed 8-bit integer to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeInt8(2);
         * writer.writeInt8(-2);
         *
         * console.log(writer.buffer);
         * // prints <Buffer 01 fe>
         * ```
         *
         * @param value The value to write.
         */
        public writeInt8(value: number): void {
                const chunk = Buffer.alloc(1);
                chunk.writeInt8(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes a signed 16-bit integer to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeInt16(0x0304);
         *
         * console.log(writer.buffer);
         * // prints <Buffer 04 03>
         * ```
         *
         * @param value The value to write.
         */
        public writeInt16(value: number): void {
                const chunk = Buffer.alloc(2);
                chunk.writeInt16LE(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes a signed 32-bit integer to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeInt32(0x05060708);
         *
         * console.log(writer.buffer);
         * // prints <Buffer 08 07 06 05>
         * ```
         *
         * @param value The value to write.
         */
        public writeInt32(value: number): void {
                const chunk = Buffer.alloc(4);
                chunk.writeInt32LE(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes a 32-bit float to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeFloat32(0xcafebabe);
         *
         * console.log(writer.buffer);
         * // prints <Buffer bb fe 4a 4f>
         * ```
         *
         * @param value The value to write.
         */
        public writeFloat32(value: number): void {
                const chunk = Buffer.alloc(4);
                chunk.writeFloatLE(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes a 64-bit double to the buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeDouble(123.456);
         *
         * console.log(writer.buffer);
         * // prints <Buffer 77 be 9f 1a 2f dd 5e 40>
         * ```
         *
         * @param value The value to write.
         */
        public writeDouble(value: number): void {
                const chunk = Buffer.alloc(8);
                chunk.writeDoubleLE(value, 0);
                this.buffer = Buffer.concat([this.buffer, chunk]);
        }

        /**
         * Writes a buffer of bytes to the writer's buffer.
         *
         * ```ts
         * const writer = new BinWriter();
         * writer.writeBytes(Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]));
         * // from node:buffer
         *
         * console.log(writer.buffer);
         * // prints <Buffer 01 02 03 04 05>
         * ```
         *
         * @param value The buffer to concatenate to the writer's buffer.
         */
        public writeBytes(value: Buffer): void {
                this.buffer = Buffer.concat([this.buffer, value]);
        }
}
