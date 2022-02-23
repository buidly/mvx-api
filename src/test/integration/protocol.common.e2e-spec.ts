import { Test } from "@nestjs/testing";
import { ProtocolService } from "../../common/protocol/protocol.service";
import { ProtocolModule } from "src/common/protocol/protocol.module";

describe('Protocol Service', () => {
  let protocolService: ProtocolService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProtocolModule],
    }).compile();

    protocolService = moduleRef.get<ProtocolService>(ProtocolService);
  });

  describe('Get Shards Ids', () => {
    it('should return shards ids', async () => {
      const shardsId = await protocolService.getShardIds();
      expect(shardsId).toStrictEqual([0, 1, 2, 4294967295]);
    });
  });

  describe('Get Seconds Remaining Until Next Round', () => {
    it('should return the remaining seconds until next round', async () => {
      const returnedSeconds = await protocolService.getSecondsRemainingUntilNextRound();
      expect(typeof returnedSeconds).toBe('number');
    });
  });
});
