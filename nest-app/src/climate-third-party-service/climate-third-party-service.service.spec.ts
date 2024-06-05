import { Test, TestingModule } from '@nestjs/testing';
import { ClimateThirdPartyServiceService } from './climate-third-party-service.service';

describe('ClimateThirdPartyServiceService', () => {
  let service: ClimateThirdPartyServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimateThirdPartyServiceService],
    }).compile();

    service = module.get<ClimateThirdPartyServiceService>(ClimateThirdPartyServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
