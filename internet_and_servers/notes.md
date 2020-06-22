# Internet & Servers

## What is Internet?

A collection of computers connected by network cables or satelite links

**Protocol**: is a set of rules governing the format of messages exchange between computers

## TCP/IP Model

It was originally built by the US department of defence and later, varies universities and other parties got involved and this lead to a rapid development which is probably why it has been more successful than **OSI Model** in a practical sense. Now, we have protocols such as TCP, UDP which align directly to this framework. Another reason this model has been successful, is that it is willing to use the protocols that are already in use, like ethernet if they already exist, it doesn't try to re-invent the wheel.

### TCP/IP Model Layers

    - Application Layer: In the application layer we talk about protocols like HTTP for web browsing, SMTP for mail delivery, and FTP for file transfers. This layer turns data into segments of binary and pass it to Transport layer. This layer definies communication between applications onto hosts, it doesn't define how the applications work, it describes how the applications use the network
    - Trasport Layer: Creates processes which listen on a particular port which uses TCP and UDP protocols and turns the data into what is called segments and pass it to Network layer. This layer has the source and destination address ports. The data then will be passed to Network layer
    - Network(Internet) Layer: uses the internet protocol(IP). The data is in a format called packets, the packet header contains the source and destination IP for every single packet
    - Physical/Link layer: The physical or (the physical and data link layers) move data from device to device and that is across switches, routers, or any other communication devices and a common protocol here is Ethernet. Examples, such as wifi, cable, fibre optic. The entire piece of data here is called a frame, the frame has the source and destination mac address.
    Physical layer is exactly what the name suggests, it is responsible for physically transmitting and retrieving data, there are many different ways this could be done, electrical, radio, or signals...

**Networking Cable (Copper, Fiber Optics, etc)**
**Network Hub**
**Router (including wifi routers)**
**Access Point**

### Carrier Wave => a carrier wave is a waveform that is modulated with an information bearing signals for the purpose of conveying information. This carrier wave usually has a much higher frequency than the input signal does.

### Digital Data Signals

Data signal is a method of how information is transferred; usually it is transferred in a binary code in signals or pulses and may be contained in a packet

We may use the following techniques to combine carrier wave and digital signals to send data across:

- ASK - Aplitude-shift keying: is a form of applitude modulation that represents digital data as variations in the applitude of a carrier wave. In an ASK system, the binary symbol 1 is represented by transmitting a fixed-applitude carrier wave and fixed frequency for a bit duration of T seconds. If the signal value is 1 then the carrier signal will be transmitted; otherwise, a signal value of 0 will be transmitted.
- FSK- Frequency-shift keying: is a frequency modulation scheme in which digital information is transmitted through discrete frequency changes of a carrier signal.
- PSK - Phase-shift keying: is a digital modulation process which conveys data by changing (modulating) the phase of a constant frequency reference signal (the carrier wave). The modulation is accomplished by varying the sine and cosine inputs at a precise time. PSK is widely used for wireless LANs, and Bluetooth communication.

#### Internet Layer

**Addressing...**
These days two protocols are mostly used for addressing:

- IPv4
- IPv6

IPv4 => uses a 32-bit address space, which limit the number of unique hosts to _4,294,967,296_ (2^32), but large blocks are reserved for special networking methods
Each block is 8 bits i.e. 2^8 = 2-255 numbers = 256 number in total

0.0.0.0 - 255.255.255.255

IPv6 is whole 128-bits of adresses
The full representation may be simplified by several method of notation; for example 2001:0db8:0000:0000:0000:1a2b:0170:7237 becomes
2001:0db8::1a2b:0170:7237

The main advantage of IPv6 over IPv4
 is its larger address space. The length of an IPv6 address is 128 bits, compared with 32 bits in IPv4 address space. The address space there ahs 2128 or approximately 3.4x1038 addresses. (340 trillion trillion trillion IP addresses.)

 **Packet / Datagram**
 a basic unit of information in network transmission at the IP level is named packed or datagram.