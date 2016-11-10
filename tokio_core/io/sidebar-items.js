initSidebarItems({"fn":[["copy","Creates a future which represents copying all the bytes from one object to another."],["flush","Creates a future which will entirely flush an I/O object and then yield the object itself."],["read","Tries to read some bytes directly into the given `buf` in asynchronous manner, returning a future type."],["read_exact","Creates a future which will read exactly enough bytes to fill `buf`, returning an error if EOF is hit sooner."],["read_to_end","Creates a future which will read all the bytes associated with the I/O object `A` into the buffer provided."],["read_until","Creates a future which will read all the bytes associated with the I/O object `A` into the buffer provided until the delimiter `byte` is reached. This method is the async equivalent to [`BufRead::read_until`]."],["write_all","Creates a future that will write the entire contents of the buffer `buf` to the stream `a` provided."]],"struct":[["Copy","A future which will copy all data from a reader into a writer."],["EasyBuf","A reference counted buffer of bytes."],["EasyBufMut","An RAII object returned from `get_mut` which provides mutable access to the underlying `Vec<u8>`."],["Flush","A future used to fully flush an I/O object."],["Framed","A unified `Stream` and `Sink` interface to an underlying `Io` object, using the `Encode` and `Decode` traits to encode and decode frames."],["FramedRead","A `Stream` interface to an underlying `Io` object, using the `Decode` trait to decode frames."],["FramedWrite","A `Sink` interface to an underlying `Io` object, using the `Encode` trait to encode frames."],["Read","A future which can be used to easily read available number of bytes to fill a buffer."],["ReadExact","A future which can be used to easily read exactly enough bytes to fill a buffer."],["ReadHalf","The readable half of an object returned from `Io::split`."],["ReadToEnd","A future which can be used to easily read the entire contents of a stream into a vector."],["ReadUntil","A future which can be used to easily read the contents of a stream into a vector until the delimiter is reached."],["Window","A owned window around an underlying buffer."],["WriteAll","A future used to write the entire contents of some data to a stream."],["WriteHalf","The writable half of an object returned from `Io::split`."]],"trait":[["Decode","Decoding of a frame from an internal buffer."],["Encode","A trait for encoding frames into a byte buffer."],["Io","A trait for read/write I/O objects"]],"type":[["IoFuture","A convenience typedef around a `Future` whose error component is `io::Error`"],["IoStream","A convenience typedef around a `Stream` whose error component is `io::Error`"]]});