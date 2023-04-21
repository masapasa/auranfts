// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file tendermint/version/types.proto (package tendermint.version, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 *
 * @generated from message tendermint.version.App
 */
export class App extends Message<App> {
  /**
   * @generated from field: uint64 protocol = 1;
   */
  protocol = protoInt64.zero;

  /**
   * @generated from field: string software = 2;
   */
  software = "";

  constructor(data?: PartialMessage<App>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.version.App";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "protocol", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "software", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): App {
    return new App().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): App {
    return new App().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): App {
    return new App().fromJsonString(jsonString, options);
  }

  static equals(a: App | PlainMessage<App> | undefined, b: App | PlainMessage<App> | undefined): boolean {
    return proto3.util.equals(App, a, b);
  }
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 *
 * @generated from message tendermint.version.Consensus
 */
export class Consensus extends Message<Consensus> {
  /**
   * @generated from field: uint64 block = 1;
   */
  block = protoInt64.zero;

  /**
   * @generated from field: uint64 app = 2;
   */
  app = protoInt64.zero;

  constructor(data?: PartialMessage<Consensus>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.version.Consensus";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "app", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consensus {
    return new Consensus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consensus {
    return new Consensus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consensus {
    return new Consensus().fromJsonString(jsonString, options);
  }

  static equals(a: Consensus | PlainMessage<Consensus> | undefined, b: Consensus | PlainMessage<Consensus> | undefined): boolean {
    return proto3.util.equals(Consensus, a, b);
  }
}

